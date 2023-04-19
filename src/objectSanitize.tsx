  const obj = {
    key1: [
      {
        name: " abc ",
        age: 10,
      },
      {
        name: "def",
        age: 20,
      },
    ],
    key2: [
      {
        name: "ghi",
        age: 30,
      },
      {
        name: " jkl ",
        age: 40,
      },
    ],
    key3: ["x", " y ", "", null, undefined],
    key4: [0, 1, 2, 3, 4, null, undefined],
    key5: " xyz ",
    key6: "",
    key7: 10,
    key8: null,
    key9: undefined,
  };

  const stripObjValue = (ob = {}) => {
    if (ob instanceof Object && !(ob instanceof Array)) {
      console.log("inO", ob);

      for (let o of Object.keys(ob)) {
        if (ob[o] instanceof String) ob[o] = ob[o].trim();
        else stripObjValue(ob[o]);
      }
    } else if (ob instanceof Array) {
      console.log("inA", ob);

      for (let i = 0; i < ob.length; i++) {
        if (ob[i] instanceof String) ob[i] = ob[i].trim();
        else stripObjValue(ob[i]);
      }
    } else console.log(typeof ob === "string" ? ob.trim() : ob && ob);
  };

  // stripObjValue(obj);

  for (let o of Object.keys(obj)) {
    if (obj[o] instanceof Array) {
      // top level array key1
      obj[o].forEach((arrEl, index) => {
        if (arrEl instanceof Object && !(arrEl instanceof Array)) {
          for (let j of Object.keys(arrEl)) {
            if (!(arrEl[j] instanceof Object) && typeof arrEl[j] === "string")
              arrEl[j] = arrEl[j].toString().trim();
          }
        } else if (typeof arrEl === "string") {
          // inside array not objects
          obj[o][index] = arrEl.trim();
        }
      });
      obj[o] = obj[o].filter((e) => (e === 0 ? true : e));
    } else if (typeof obj[o] === "string") obj[o] = obj[o].trim();
    else if (obj[o] === null || obj[o] === undefined) delete obj[o];
  }

  // console.log(obj);
