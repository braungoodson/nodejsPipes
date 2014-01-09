// `.read(n)` read n bytes at a time
// process.stdin.on('readable',function(){
// 	var b = process.stdin.read(8);
//	console.dir(b);
// });
// $ (ls; sleep 1; ls; sleep 1) | node pipes-003.js
// <Buffer 6e 6f 64 60>
// <Buffer 65 5f 6d 61>
// only reads first three bytes each time
// instead, we want all bytes read, just three bytes at a time

// here we can try and consume, but if there are not enough bytes
//  then we don't consume until there is
process.stdin.on('readable',function(){
	var b = process.stdin.read(8);
	console.dir(b);
	process.stdin.read(0);
});
// $ (echo abcd; sleep 1; echo ghi; sleep 1; echo def) | node pipes-003.js
// null
// <Buffer 61 62 63 64 0a 67 68 69>
// null
// <Buffer 0a 64 65 66 0a>

// https://github.com/substack/stream-handbook
