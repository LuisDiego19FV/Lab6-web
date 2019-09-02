const a = React.createElement("button", { type: "button", id: "blue-btn" });
const b = React.createElement("button", { type: "button", id: "green-btn" });
const c = React.createElement("button", { type: "button", id: "purple-btn" });
const d = React.createElement("button", { type: "button", id: "silver-btn" });
const e = React.createElement("button", { type: "button", id: "pink-btn" });
const f = React.createElement("button", { type: "button", id: "yellow-btn" });
const g = React.createElement("button", { type: "button", id: "black-btn" });
const h = React.createElement("button", { type: "button", id: "orange-btn" });

var intento1 = "";
var intento1_int = 0;
var intento2 = "";
var intento2_int = 0;
var puntos = 0;
var intentos = 0;

var cards = [a, b, c, d, e, f, g, h, a, b, c, d, e, f, g, h];
shuffle(cards);

class Comp extends React.Component {
  changeColor(theId, theInt) {

    if (intento1 !== "" && intento2 !== "") {
      return 0;
    }

    if (intento1 === "") {
      intento1 = theId;
      intento1_int = theInt;
    } else

    if (intento2 === "") {
      intento2 = theId;
      intento2_int = theInt;
    }

    ReactDOM.render(cards[theInt], document.getElementById(theId));
    console.log(intento1);
    console.log(intento2);
    console.log(intento1 !== "" && intento2 !== "");
    if (intento1 != "" && intento2 != "") {
      if (cards[intento1_int] === cards[intento2_int]) {
        puntos++;
        intentos++;

        intento1 = "";
        intento1_int = 0;
        intento2 = "";
        intento2_int = 0;

        document.getElementById("pts").innerHTML = "Puntos: " + puntos.toString();
        document.getElementById("intentosCount").innerHTML = "Intentos: " + intentos.toString();

        if (puntos === 8) {
          document.getElementById("title").innerHTML = "YOU WON!!!";
        }
      } else

      {

        var el1 = React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, intento1, intento1_int) });

        var el2 = React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, intento2, intento2_int) });

        setTimeout(function () {
          ReactDOM.render(el1, document.getElementById(intento1));

          ReactDOM.render(el2, document.getElementById(intento2));

          intento1 = "";
          intento1_int = 0;
          intento2 = "";
          intento2_int = 0;

          intentos++;

          document.getElementById("intentosCount").innerHTML = "Intentos: " + intentos.toString();
        }, 1300);
      }
    }
  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { class: "grid" },
      React.createElement("div", { class: "gridComp", id: "g1" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g1", 0) })),

      React.createElement("div", { class: "gridComp", id: "g2" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g2", 1) })),

      React.createElement("div", { class: "gridComp", id: "g3" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g3", 2) })),

      React.createElement("div", { class: "gridComp", id: "g4" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g4", 3) })),

      React.createElement("div", { class: "gridComp", id: "g5" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g5", 4) })),

      React.createElement("div", { class: "gridComp", id: "g6" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g6", 5) })),

      React.createElement("div", { class: "gridComp", id: "g7" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g7", 6) })),

      React.createElement("div", { class: "gridComp", id: "g8" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g8", 7) })),

      React.createElement("div", { class: "gridComp", id: "g9" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g9", 8) })),

      React.createElement("div", { class: "gridComp", id: "g10" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g10", 9) })),

      React.createElement("div", { class: "gridComp", id: "g11" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g11", 10) })),

      React.createElement("div", { class: "gridComp", id: "g12" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g12", 11) })),

      React.createElement("div", { class: "gridComp", id: "g13" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g13", 12) })),

      React.createElement("div", { class: "gridComp", id: "g14" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g14", 13) })),

      React.createElement("div", { class: "gridComp", id: "g15" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g15", 14) })),

      React.createElement("div", { class: "gridComp", id: "g16" },
      React.createElement("button", { type: "button", onClick: this.changeColor.bind(this, "g16", 15) }))),


      React.createElement("p", { id: "title" }, "Match All The Colors"),
      React.createElement("p", { id: "intentosCount" }, "Intentos: 0"),
      React.createElement("p", { id: "pts" }, "Puntos: 0")));


  }}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

ReactDOM.render(React.createElement(Comp, null), document.getElementById('root'));