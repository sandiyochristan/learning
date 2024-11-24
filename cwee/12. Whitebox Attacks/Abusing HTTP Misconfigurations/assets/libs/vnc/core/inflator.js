import{inflateInit,inflate,inflateReset}from "../vendor/pako/lib/zlib/inflate.js";import ZStream from "../vendor/pako/lib/zlib/zstream.js";export default class Inflate{constructor(){this.strm=new ZStream();this.chunkSize=1024*10*10;this.strm.output=new Uint8Array(this.chunkSize);this.windowBits=5;inflateInit(this.strm,this.windowBits);}
setInput(data){if(!data){this.strm.input=null;this.strm.avail_in=0;this.strm.next_in=0;}else{this.strm.input=data;this.strm.avail_in=this.strm.input.length;this.strm.next_in=0;}}
inflate(expected){if(expected>this.chunkSize){this.chunkSize=expected;this.strm.output=new Uint8Array(this.chunkSize);}
this.strm.next_out=0;this.strm.avail_out=expected;let ret=inflate(this.strm,0);if(ret<0){throw new Error("zlib inflate failed");}
if(this.strm.next_out!=expected){throw new Error("Incomplete zlib block");}
return new Uint8Array(this.strm.output.buffer,0,this.strm.next_out);}
reset(){inflateReset(this.strm);}}