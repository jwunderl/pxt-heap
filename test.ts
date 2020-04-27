// game.consoleOverlay.setVisible(true);

// console.log("test 1")
// testMaxHeap();
// console.log("test 2")
// testMinHeap();
// console.log("test 3")
// testHeapify();
// console.log("test over")


// function testMaxHeap() {
//     const maxHeap = new Heap<number>((a, b) => b - a);
//     for (let i = 0; i < 10; i++) {
//         maxHeap.push(i);
//     }
    
//     let prev = maxHeap.pop()
//     console.log(prev)
//     while (maxHeap.length) {
//         const next = maxHeap.pop();
//         console.log(next)
//         if (prev < next) {
//             console.log("!!!! BAD");
//         }
//         prev = next;
//     }
// }

// function testMinHeap() {
//     const minHeap = new Heap<number>((a, b) => a - b);

//     for (let i = 0; i < 50; i++) {
//         minHeap.push(Math.randomRange(-500, 500));
//     }

//     let prev = minHeap.pop();

//     while(minHeap.length) {
//         const next = minHeap.pop();
//         if (prev > next) {
//             console.log("!!!! BAD");
//         }
//         prev = next;
//     }
// }

// function testHeapify() {
//     const inp: number[] = []

//     for (let i = 0; i < 50; i++) {
//         inp.push(Math.randomRange(-500, 500));
//     }

//     const minHeap = Heap.buildHeap<number>((a, b) => a - b, inp)
//     let prev = minHeap.pop();

//     while(minHeap.length) {
//         const next = minHeap.pop();
//         if (prev > next) {
//             console.log("!!!! BAD");
//         }
//         prev = next;
//     }
// }