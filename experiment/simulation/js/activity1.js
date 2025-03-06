let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Trapezoidal Rule (Continous Function)</h5>
        <p>Learning Objective:Learn to generate the data for continous</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate y values", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <div style='text-align: center;'>
            <p style='text-align: center;'><span style='font-style: 25px;'>
                $$ \\int_{${x}}^{${x + 6}} (x^4 - \\ 5x \\ + \\ 3) \\ dx $$
            </span></p>
            <p style='text-align: center;'><span style='font-style: 25px;'>$$ h = 1 $$</span></p>
        </div>
        <br>

        <h5>Enter the values Y in the table</h5> <br>

        <div id='piv-inp-div' style='text-align: center;'></div>
        <br>

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    //generate x and y arrays
    generate_data(x, x_vals, y_vals);
    show_step('tb1-box');
    show_xy();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function show_xy() {
    let div = document.getElementById('piv-inp-div');
    let header = ['x'];
    tb_data = [['y']];
    for (let i = 0; i < 7; i++) {
        header.push(`${x + i}`);
        tb_data[0].push(y_vals[i]);
    }
    let tb = new Verify_Table(header, tb_data, 0, [1, 2, 3, 4, 5, 6, 7], y_vals, "", div, true, activity2);
    tb.load_table();
}
activity1();
//# sourceMappingURL=activity1.js.map