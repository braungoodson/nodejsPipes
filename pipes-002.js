// consuming a readable stream
// if pipes-001 were to pipe into this program
//  we would need to consume that stream

process.stdin.on('readable',function(){
	var b = process.stdin.read();
	console.dir(b);
});

// $ (ls; sleep 1; ls; sleep 1) | node pipes-002.js
// <Buffer 6e 6f 64 65 5f 6d 6f 64 75 6c 65 73 0a 70 69 70 65 73 2d 30 30 31 2e 6a 73 0a 70 69 70 65 73 2d 30 30 32 2e 6a 73 0a>
// <Buffer 6e 6f 64 65 5f 6d 6f 64 75 6c 65 73 0a 70 69 70 65 73 2d 30 30 31 2e 6a 73 0a 70 69 70 65 73 2d 30 30 32 2e 6a 73 0a>
// null

// when data is ready, the `readable` event is fired
// and you can call `.read()` to fetch data from
//  the buffer
// when the stream ends, `.read()` returns null
// `.read(n)` returns n bytes of data
//  doesn't work for object streams


