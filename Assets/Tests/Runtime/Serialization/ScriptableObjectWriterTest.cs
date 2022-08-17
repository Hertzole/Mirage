using Mirage.Serialization;
using NUnit.Framework;
using UnityEngine;

namespace Mirage.Tests.Runtime.Serialization
{
    internal class MyScriptableObject : ScriptableObject
    {
        public int someData;
    }

    [TestFixture]
    public class ScriptableObjectWriterTest
    {

        // ArraySegment<byte> is a special case,  optimized for no copy and no allocation
        // other types are generated by the weaver

        [Test]
        public void TestWriteScriptableObject()
        {
            var scriptableObject = ScriptableObject.CreateInstance<MyScriptableObject>();

            scriptableObject.someData = 10;

            var data = MessagePacker.Pack(scriptableObject);

            var unpacked = MessagePacker.Unpack<MyScriptableObject>(data, null);

            Assert.That(unpacked, Is.Not.Null);
            Assert.That(unpacked.someData, Is.EqualTo(10));
        }

    }
}
