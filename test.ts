// game.consoleOverlay.setVisible(true);

console.log("test 1")
testMaxHeap();
console.log("test 2")
testMinHeap();
console.log("test 3")
testHeapify();
console.log("test 4")
testHeapifyWithSprites();
console.log("test over")

controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    for (const e of sprites.allOfKind(SpriteKind.Enemy)) {
        e.destroy();
    }
    testHeapifyWithSprites();
});

function testMaxHeap() {
    const maxHeap = new Heap((a: number, b: number) => b - a);
    for (let i = 0; i < 10; i++) {
        maxHeap.push(i);
    }
    
    let prev = maxHeap.pop()
    console.log(prev)
    while (maxHeap.length) {
        const next = maxHeap.pop();
        console.log(next)
        if (prev < next) {
            console.log("!!!! BAD");
        }
        prev = next;
    }
}

function testMinHeap() {
    const minHeap = new Heap((a: number, b: number) => a - b);

    for (let i = 0; i < 50; i++) {
        minHeap.push(Math.randomRange(-500, 500));
    }

    let prev = minHeap.pop();

    while(minHeap.length) {
        const next = minHeap.pop();
        if (prev > next) {
            console.log("!!!! BAD");
        }
        prev = next;
    }
}

function testHeapify() {
    const inp: number[] = []

    for (let i = 0; i < 50; i++) {
        inp.push(Math.randomRange(-500, 500));
    }

    const minHeap = Heap.buildHeap<number>((a, b) => a - b, inp)
    let prev = minHeap.pop();

    while(minHeap.length) {
        const next = minHeap.pop();
        if (prev > next) {
            console.log("!!!! BAD");
        }
        prev = next;
    }
}

function testHeapifyWithSprites() {
    for (let i = 0; i < 10; i++) {
        const e = sprites.create(img`
            . . . . c c . .
            . c a a a a . .
            . a a f f b a .
            c a b f f c b .
            c b b b a f c b
            c b a c a b b b
            . b b f f a a c
            . . a a b b c .
        `, SpriteKind.Enemy);
        e.setPosition(Math.randomRange(15, screen.width - 15), Math.randomRange(15, screen.height - 15));
    }
    const myEnemies = sprites.allOfKind(SpriteKind.Enemy);
    const myEnemyHeap = Heap.buildHeap<Sprite>(
        (a, b) => (a.x ** 2 + a.y ** 2) - (b.x ** 2 + b.y ** 2),
        myEnemies
    );

    let count = 0;
    while (myEnemyHeap.length) {
        myEnemyHeap.pop().say((++count) + "")
    }
}