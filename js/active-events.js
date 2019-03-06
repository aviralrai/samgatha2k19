//Events 

let pos1 = 0;
for (let i = 0; i < 10; i++) {
    if (list1[i][1] == 1) {
        document.getElementById(list1[i][0]).style.color = "#F38445";
    }
}
for (let i = 0; i < 10; i++) {
    document.getElementById(list1[i][0]).onclick = function () {
        for (let j = 0; j < 10; j++) {
            list1[j][1] = 0;
            if (j == i) {
                list1[i][1] = 1;
                document.getElementById(list1[j][0]).style.color = "#F38445";
            } else {
                document.getElementById(list1[j][0]).style.color = "white";
            }
        }
        onepage.move(i);
        list1[i][1] = 1;
        pos1 = i;
    };
}

//Arrow

for (let i = 1; i < 10; i++) {
    document.getElementById(list2[i - 1]).onclick = function () {
        for (let j = 0; j < 10; j++) {
            list1[j][1] = 0;
            if (j == i) {
                list1[i][1] = 1;
                document.getElementById(list1[j][0]).style.color = "#F38445";
            } else {
                document.getElementById(list1[j][0]).style.color = "white";
            }
        }
        onepage.move(i);
        list1[i][1] = 1;
        pos1 = i;
    };
    document.getElementById(list3[i - 1]).onclick = function () {
        for (let j = 0; j < 10; j++) {
            list1[j][1] = 0;
            if (j == i - 1) {
                list1[i][1] = 1;
                document.getElementById(list1[j][0]).style.color = "#F38445";
            } else {
                document.getElementById(list1[j][0]).style.color = "white";
            }
        }
        onepage.move(i-1);
        list1[i][1] = 1;
        pos1 = i;
    };
}

// Hambuger links

for(let i=1;i<=10;i++)
{
    for(let j=0;j<10;j++)
    {
        if(list5[j]==1)
        {
            document.getElementById(String(j+1)).style.color="#F38445";
        }
        else
        {
            document.getElementById(String(j+1)).style.color="#333333";
        }
    }
    document.getElementById(String(i)).onclick=function(){
        for(let j=0;j<10;j++)
        {
            document.getElementById(String(j+1)).style.color="#333333";
            list5[j]=0;
        }
        onepage.move(i-1);
        list5[i-1]=1;
        $('#overlay-bot').toggleClass('active');
        $('#close-bot').toggleClass('active');
        $('#bottom-ham').toggleClass('active');
        ham_check=0;
        for(let j=0;j<10;j++)
        {
            if(list5[j]==1)
            {
                document.getElementById(String(j+1)).style.color="#F38445";
            }
            else
            {
                document.getElementById(String(j+1)).style.color="#333333";
            }
        }
    };
}
