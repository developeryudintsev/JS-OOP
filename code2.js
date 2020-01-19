let slider2 = {
    before: null,
    pictyre: null,
    next: null,
    index: 0,
    array: ['1.jpg', '2.jpg', '3.jpg'],

    start: function (bossId) {
        let newThis = this;
        let boss = document.querySelector('#' + bossId);
        newThis.before = boss.querySelector('#before');
        newThis.pictyre = boss.querySelector('#pictyre');
        newThis.next = boss.querySelector('#next');
        newThis.pictyre.src = newThis.array[newThis.index];
        newThis.next.addEventListener('click', function () {
            newThis.nextBTN();
        })
        this.before.disabled = true;
        newThis.before.addEventListener('click', function () {
            newThis.beforeBTN();
        })
    },
    nextBTN: function () {
        this.pictyre.src = this.array[++this.index];
        this.before.disabled = false;
        if (this.index === this.array.length - 1) {
            this.next.disabled = true;
        }
    },
    beforeBTN: function () {
        this.pictyre.src = this.array[--this.index];
        this.next.disabled = false;
        if (this.index === 0) {
            this.before.disabled = true;
        }
    }
}