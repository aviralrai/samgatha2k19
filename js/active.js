let pos = 0;
for (let i = 0; i < list.length; i++) {
    if (list[i][1] == 1) {
        document.getElementById(list[i][0]).style.color = "#F38445";
    }
}

for (let i = 0; i < list.length; i++) {
    document.getElementById(list[i][0]).onclick = function () {
        for (let j = 0; j < list.length; j++) {
            list[j][1] = 0;
            if (j == i) {
                list[i][1] = 1;
                document.getElementById(list[j][0]).style.color = "#F38445";
            } else {
                document.getElementById(list[j][0]).style.color = "white";
            }
        }
        onepage.move(i);
        list[i][1] = 1;
        pos = i;
    };
}


//Arrow
for (let i = 1; i < list.length; i++) {
    document.getElementById(list2[i - 1]).onclick = function () {
        for (let j = 0; j < list.length; j++) {
            list[j][1] = 0;
            if (j == i) {
                list[i][1] = 1;
                document.getElementById(list[j][0]).style.color = "#F38445";
            } else {
                document.getElementById(list[j][0]).style.color = "white";
            }
        }
        onepage.move(i);
        list[i][1] = 1;
        pos = i;
    }
    document.getElementById(list3[i - 1]).onclick = function () {
        for (let j = 0; j < list.length; j++) {
            list[j][1] = 0;
            if (j == i - 1) {
                list[i][1] = 1;
                document.getElementById(list[j][0]).style.color = "#F38445";
            } else {
                document.getElementById(list[j][0]).style.color = "white";
            }
        }
        onepage.move(i - 1);
        list[i][1] = 1;
        pos = i;
    }
}
