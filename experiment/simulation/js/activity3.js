function activity3() {
    let btn = document.getElementById('temp-btn-2');
    if (btn) {
        btn.remove();
    }
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <div class="fs-16px">
        <h5>Calculate I</h5>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
    plot_xy();
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Verify I", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <h5>Calculate I</h5>

        <div style='text-align: center;'><span>$$ I \\ = \\ \\frac{h}{2} (Y_1 + 2Y_2 + 2Y_3 + 2Y_4 + 2Y_5 + 2Y_6 + Y_7) $$</span></div>
        <br><br>

        <div id='bs-inp-div' style='text-align: center;'><span style='font-size: 30px;'>I</span> = <input type='number' class='form-control' style='display: inline !important;' id='i-inp' > <span id='i-val-sp'></span></div>

        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_I();'  id='temp-btn-1234' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb3-box');
    calculate_I();
    setTimeout(() => { MathJax.typeset(); }, 300);
    plot_xy();
}
function calculate_I() {
    I_val = trap(x_vals, y_vals);
}
function verify_I() {
    let btn = document.getElementById('temp-btn-1234');
    console.log(`I => ${I_val}`);
    let inp = document.getElementById('i-inp');
    let sp = document.getElementById('i-val-sp');
    if (!verify_values(parseFloat(inp.value), I_val)) {
        alert('I value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${I_val}`;
}
// function bs_a_c() {
//     let c: number[] = [];
//     c.push(mat_c[0][0]);
//     c.push(mat_c[1][0]);
//     c.push(mat_c[2][0]);
//     mat_x = back_sub(mat_a, c);
//     mat_c = [];
//     mat_c.push([c[0]], [c[1]], [c[2]]);
// }
// function verify_matrix_bs() {
//     let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('temp-btn-1234');
//     let inp_c: HTMLInputElement;
//     console.log(`matrix x =>`, mat_x);
//     //for x
//     for(let i=0; i<3; i++) {
//         inp_c = <HTMLInputElement> document.getElementById(`a1-x-${i+1}1`);
//         if(!verify_values(parseFloat(inp_c.value), mat_x[i])) {
//             alert(`incorrect value in 3 x 1 matrix for X[${i+1}]`);
//             return;
//         }
//     }
//     btn.remove();
//     render_bs_a_c();
//     alert("You have successfully completed this experiment.")
//     maindiv.innerHTML = ``
// ;}
// function render_bs_a_c() {
//     let div: HTMLDivElement = <HTMLDivElement> document.getElementById('ut-inp-div');
//     div.innerHTML = `${get_matrix_html(3, 3, mat_a, 'inline-block', "40%")} &nbsp; <span style='font-size: 30px;'>. X</span>  &nbsp; =  &nbsp; ${get_matrix_html(3, 1, mat_c, 'inline-block', "15%")}`;
// }
//# sourceMappingURL=activity3.js.map