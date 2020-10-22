﻿using System;
using System.Collections;
using Cysharp.Threading.Tasks;
using NSubstitute;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

using Object = UnityEngine.Object;

namespace Mirror.Tests
{
    public class FallbackTransportTest
    {
        #region SetUp

        private GameObject transportObj;
        private FallbackTransport transport;

        private Transport transport1;
        private Transport transport2;

        IConnection conn1;
        IConnection conn2;

        [SetUp]
        public void Setup()
        {
            transportObj = new GameObject();

            transport = transportObj.AddComponent<FallbackTransport>();

            // this gives warnings,  it is ok
            transport1 = Substitute.For<Transport>();
            transport2 = Substitute.For<Transport>();

            transport1.Supported.Returns(true);
            transport2.Supported.Returns(true);

            transport.transports = new[] { transport1, transport2 };
            conn1 = Substitute.For<IConnection>();
            conn2 = Substitute.For<IConnection>();

        }

        [TearDown]
        public void TearDown()
        {
            Object.DestroyImmediate(transportObj);
        }
        #endregion

        [UnityTest]
        public IEnumerator AcceptTransport1() => UniTask.ToCoroutine(async () =>
        {
            transport1.AcceptAsync().Returns(UniTask.FromResult(conn1));

            Assert.That(await transport.AcceptAsync(), Is.SameAs(conn1));
        });

        [UnityTest]
        public IEnumerator AcceptTransport2() => UniTask.ToCoroutine(async () =>
        {
            transport1.Supported.Returns(false);
            transport2.AcceptAsync().Returns(UniTask.FromResult(conn1));
            Assert.That(await transport.AcceptAsync(), Is.SameAs(conn1));
        });

        [UnityTest]
        public IEnumerator AcceptMultiple() => UniTask.ToCoroutine(async () =>
        {
            transport2.Supported.Returns(false);
            transport1.AcceptAsync().Returns(UniTask.FromResult(conn1), UniTask.FromResult(conn2));
            // transport2 task never ends
            Assert.That(await transport.AcceptAsync(), Is.SameAs(conn1));
            Assert.That(await transport.AcceptAsync(), Is.SameAs(conn2));
        });

        [UnityTest]
        public IEnumerator AcceptInvalid() => UniTask.ToCoroutine(async () =>
        {
            transport1.Supported.Returns(false);
            transport2.Supported.Returns(false);

            try
            {
                _ = await transport.AcceptAsync();
                Assert.Fail("IF no sub transport is supported transport is not supported");
            }
            catch (PlatformNotSupportedException)
            {
                // expected
            }
        });

        [UnityTest]
        public IEnumerator AcceptUntilAllGone() => UniTask.ToCoroutine(async () =>
        {
            transport1.AcceptAsync().Returns(x => UniTask.FromResult(conn1), x => UniTask.FromResult<IConnection>(null));
            // transport2 task never ends
            transport2.AcceptAsync().Returns(x => UniTask.FromResult(conn2), x => UniTask.FromResult<IConnection>(null));

            Assert.That(await transport.AcceptAsync(), Is.SameAs(conn1));
            Assert.That(await transport.AcceptAsync(), Is.Null);
        });

        [UnityTest]
        public IEnumerator Listen1() => UniTask.ToCoroutine(async () =>
        {
            transport1.ListenAsync().Returns(UniTask.CompletedTask);
            transport2.ListenAsync().Returns(UniTask.CompletedTask);
            await transport.ListenAsync();

            transport1.Received().ListenAsync().Forget();
            transport2.Received(0).ListenAsync().Forget();

        });

        [UnityTest]
        public IEnumerator Listen2() => UniTask.ToCoroutine(async () =>
        {
            transport1.Supported.Returns(false);
            transport2.ListenAsync().Returns(UniTask.CompletedTask);
            await transport.ListenAsync();

            transport1.Received(0).ListenAsync().Forget();
            transport2.Received().ListenAsync().Forget();

        });

        [UnityTest]
        public IEnumerator ListenNone() => UniTask.ToCoroutine(async () =>
        {
            transport1.Supported.Returns(false);
            transport2.Supported.Returns(false);

            try
            {
                await transport.ListenAsync();
                Assert.Fail("IF no sub transport is supported transport is not supported");
            }
            catch (PlatformNotSupportedException)
            {
                // expected
            }

        });

        [Test]
        public void Disconnect1()
        {
            transport.Disconnect();
            transport1.Received().Disconnect();
            transport2.Received().Disconnect();
        }

        [Test]
        public void ServerUri1()
        {
            transport1.ServerUri().Returns(new[] { new Uri("kcp://myserver") });

            Assert.That(transport.ServerUri(), Is.EquivalentTo(new[] { new Uri("kcp://myserver") }));
        }

        [Test]
        public void ServerUri2()
        {
            transport1.Supported.Returns(false);
            transport2.ServerUri().Returns(new[] { new Uri("kcp://myserver") });

            Assert.That(transport.ServerUri(), Is.EquivalentTo(new[] { new Uri("kcp://myserver") }));
        }


        [Test]
        public void ServerUriNone()
        {
            transport1.Supported.Returns(false);
            transport2.Supported.Returns(false);

            Assert.Throws<PlatformNotSupportedException>(() =>
            {
                _ = transport.ServerUri();
            });
        }


        [Test]
        public void Scheme1()
        {
            transport1.Scheme.Returns(new[] { "kcp" });

            Assert.That(transport.Scheme, Is.EquivalentTo(new[] { "kcp" }));
        }

        [Test]
        public void Scheme2()
        {
            transport1.Supported.Returns(false);
            transport2.Scheme.Returns(new[] { "kcp" });

            Assert.That(transport.Scheme, Is.EquivalentTo(new[] { "kcp" }));
        }


        [Test]
        public void SchemeNone()
        {
            transport1.Supported.Returns(false);
            transport2.Supported.Returns(false);

            Assert.Throws<PlatformNotSupportedException>(() =>
            {
                _ = transport.Scheme;
            });
        }

        [UnityTest]
        public IEnumerator Connect() => UniTask.ToCoroutine(async () =>
        {
            transport1.Supported.Returns(false);

            // transport2 gives a connection
            transport2.ConnectAsync(Arg.Any<Uri>())
                .Returns(UniTask.FromResult(conn2));

            IConnection accepted1 = await transport.ConnectAsync(new Uri("kcp://localhost"));

            Assert.That(accepted1, Is.SameAs(conn2));
        });

        [UnityTest]
        public IEnumerator CannotConnect() => UniTask.ToCoroutine(async () =>
        {
            transport1.Supported.Returns(false);
            transport2.Supported.Returns(false);

            try
            {
                _ = await transport.ConnectAsync(new Uri("kcp://localhost"));
                Assert.Fail("Should not be able to connect if none of the transports can connect");
            }
            catch (PlatformNotSupportedException)
            {
                // ok
            }
        });
    }
}
