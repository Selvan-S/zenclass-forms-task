const h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.innerHTML = "CALL BACK HELL TASK";
document.body.appendChild(h1);

const p = document.createElement("p");
p.setAttribute("id", "description");
p.innerHTML =
  "Display countdown from 10 to 1 on the screen and then display Happy Independence Day on the screen.";
document.body.appendChild(p);

const result = document.createElement("p");
result.setAttribute("id", "result");
document.body.appendChild(result);
let count = 10;
setTimeout(() => {
  result.innerHTML = `${count}`;
  setTimeout(() => {
    count--;
    result.innerHTML = `${count}`;
    setTimeout(() => {
      count--;
      result.innerHTML = `${count}`;
      setTimeout(() => {
        count--;
        result.innerHTML = `${count}`;
        setTimeout(() => {
          count--;
          result.innerHTML = `${count}`;
          setTimeout(() => {
            count--;
            result.innerHTML = `${count}`;
            setTimeout(() => {
              count--;
              result.innerHTML = `${count}`;
              setTimeout(() => {
                count--;
                result.innerHTML = `${count}`;
                setTimeout(() => {
                  count--;
                  result.innerHTML = `${count}`;
                  setTimeout(() => {
                    count--;
                    result.innerHTML = `${count}`;
                    setTimeout(() => {
                      result.innerHTML = `<span style="color:#FF7722" class="happy">Happy </span><span style="color:#fff" class="Independence">Independence </span><span style="color:#138808" class="day">Day</span>`;
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
