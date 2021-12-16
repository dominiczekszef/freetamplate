/* All Javascript written by Jeffrey B. Madden 2021. */
/* Dominik szef kurwo <3 */
(function() {
    var Menu = function(element) {
        this.element = document.getElementById(element);
        this.init();
    };

    Menu.prototype = {
        /* Properties */
        init: function() {
            var self = this;
            this.subjects = this.element.getElementsByClassName("subject");
            this.last_open = undefined;
            this.openListener = function() { self.open(this, self); };
            this.closeListener = function() { self.close(this, self); };
            this.setupHeight();
        },

        setupHeight: function() {
            var self = this;

            var x;
            var len = self.subjects.length;
            for (x = 0; x < len; x++) {
                var subject = self.subjects[x];
                var h4 = subject.getElementsByTagName("h4")[0];
                subject.style.height = h4.clientHeight + "px";
                subject.classList.add("closed");
                h4.addEventListener("click", self.openListener, false);
            }
        },

        open: function(th, self) {
            var subject = th.parentElement;
            var p = th.nextElementSibling;
            subject.style.height = (th.clientHeight + p.clientHeight) + "px";
            subject.classList.remove("closed");
            subject.classList.add("open");
            th.removeEventListener("click", self.openListener);
            th.addEventListener("click", self.closeListener, false);
            if (self.last_open !== undefined) { if (self.last_open !== this) { self.close(self.last_open, self); } }
            self.last_open = th;
        },

        close: function(th, self) {
            var subject = th.parentElement;
            subject.style.height = th.clientHeight + "px";
            subject.classList.remove("open");
            subject.classList.add("closed");
            th.removeEventListener("click", self.closeListener);
            th.addEventListener("click", self.openListener, false);
            if (self.last_open === th) { self.last_open = undefined; }
        }
    };

    (function() {
        var menu = new Menu("collapsible_list_wrap");
    })();
})();

//   NOPEREKQ / Marta Hinc