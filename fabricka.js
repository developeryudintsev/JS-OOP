let factory = {
    Engine: function () {
        let slider = {
            before: null,
            slider: null,
            next: null,
            index: 0,
            array: ['1.jpg', '2.jpg', '3.jpg'],

            start: function (bossId) {
                let currentThis = this;
                let boss = document.querySelector('#' + bossId);
                currentThis.before = boss.querySelector('#before');
                currentThis.slider = boss.querySelector('#slider');
                currentThis.next = boss.querySelector('#next');
                currentThis.slider.src = currentThis.array[currentThis.index];


                currentThis.next.addEventListener('click', function () {
                    currentThis.nextBTN();
                })
                this.before.disabled = true;
                currentThis.before.addEventListener('click', function () {
                    currentThis.beforeBTN();
                })

            },

            nextBTN: function () {
                this.slider.src = this.array[++this.index];
                this.before.disabled = false;
                if (this.index === this.array.length - 1) {
                    this.next.disabled = true;
                }
            },
            beforeBTN: function () {
                this.slider.src = this.array[--this.index];
                this.next.disabled = false;
                if (this.index === 0) {
                    this.before.disabled = true;
                }
            }
        }
        return slider;
    }

}
