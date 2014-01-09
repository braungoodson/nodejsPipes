// pipe
// src.pipe(dst)
// pipes the src output into dst input
// src must be a readable stream
// dst must be a writable stream
// a.pipe(b).pipe(c) 
// == a.pipe(b) + b.pipe(c)
// == a | b | c
var r = require('stream').Readable;
var s = new r;
s.push('beep');
s.push(' ');
s.push('bop');
s.push('\n');
s.push(null);
s.pipe(process.stdout);
// pipe s.output into process.stdout.input
// which in this case is the command-line
// note: before `pipe()` push data
//    data push is buffered until consumer
//    is ready
// note: avoid buff by waiting until consumer
//    is ready to consume with `_read()`
s = new r;
s._read = function (bytesSize) {
	s.push('ok\n');
	s.push(null);
}
s.pipe(process.stdout);
// the `_read()` is passed size of byte consumption
// when the consumer is ready for consumption
//  the consumer calls `_read()` on the parent
//  pipe

