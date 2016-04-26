
      var session = new QiSession();

      function fromtablet() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/fromtablet", 1);
        });
        location.href="index2.html"
      }
      function fromtablet2() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/fromtablet2", 1);
        });
        location.href="index3.html"
      }
      function fromtablet3() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/fromtablet3", 1);
        });
      }
      function fromtablet0() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/fromtablet0", 1);
        });
      }

      function normal() {
        location.href="normal.html"
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/normal", 1);
        });
      }
      function color() {
        location.href="color.html"
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/color", 1);
        });
      }
      function ruleNormal() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/Normal", 1);
        });
      }
      function speed() {
        location.href="speed.html"
      }
      function tempo100() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/tempo100", 1);
        });
      }
      function tempo120() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/tempo120", 1);
        });
      }
      function tempo150() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/tempo150", 1);
        });
      }
      function tempo200() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/tempo200", 1);
        });
      }
      function ruleColor() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/ruleColor", 1);
        });
      }
      function startColor() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/startColor", 1);
        });
      }
      function finish() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/finish", 1);
        });
      }
      function goTop() {
        location.href="index.html"
      }
      function interrupt() {
        session.service("ALMemory").done(function (ALMemory) {
          ALMemory.raiseEvent("PepperQiMessaging/interrupt", 1);
        });
      }
