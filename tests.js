/*
  TODO
    -   Tests schreiben
    -   vb2js so umschreiben, dass man einzelne, gültige VBA-Zeilen testen kann
*/

function test_all(){
    return test_for_loop().join("\n");
}

function test_for_loop(){

    var vba =["For i = 10 to 20", 
        "For j = 10 to 20 Step 1", 
        "for zahler = 10 to 20 step 2",
        "for k = 20 to 10 Step -1",
        "for k = 20 to 10 Step -2",
        "for kkk = 20 to 10 step A",
        "for drei = 200 to 10 step -stepsize",
        "for drei = 200 to 10 step stepsize",
        "for k = a to b step c"
    ];
    var goal = ["for (i=10; i<=20; i++){",
        "for (j=10; i<=20; i++){",
        "for (zahler=10; zahler<=20; zahler +=2){",
        "for (k=20; k>=10; i--){",
        "for (k=20; k>=10; i-=2){",
        "for (kkk=20; kkk>=10; kkk+=A){",
        "for (drei=200; drei>=10; drei-=stepsize){",
        "for (drei=200; drei>=10; drei+=stepsize){",
        "for (k=a; k==b; i+=c){"
    ];

    var for_loop_results = [];

    for (i = 0; i < vba.length; i++){
        js_line = vbsTojs(vba[i]);
        if (js_line == goal[i]){
            for_loop_results.push(true);
        } else {
            for_loop_results.push(["false: ", vba[i], "  ==>>  ", js_line].join("  "));
        }
    }

    return for_loop_results; //for_loop_results.join("\n");

}

