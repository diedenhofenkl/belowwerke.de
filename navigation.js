var id = 0;
var maxCount = 0;

function InitNavigation()
{
    maxCount=-1;
    for (var i = 0; i < document.getElementsByTagName("img").length; i++)
    {
        if(document.getElementsByTagName("img")[i].className=="navImg")
        {
            maxCount++;
        }
    }

    //document.write("maxCount="+maxCount)
}

function HandleClick(strId) {
    id = parseInt(strId, 10);

    UpdateListContent();
}

function GotoNextItem() {
    id++;
    if (id > maxCount) {
        id = maxCount;
    }
    UpdateListContent();
}

function GotoPreviousItem() {
    id--;
    if (id < 0) {
        id = 0;
    }
    UpdateListContent();
}

function GotoFirstItem() {
    id = 0;
    UpdateListContent();
}

function GotoLastItem() {
    id = maxCount;
    UpdateListContent();
}

function UpdateListContent() {
    // scroll image and text to the appropriate section
    for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
        var elem = document.getElementsByTagName("div")[i];
        if (elem.className == "list_item") {
            document.getElementsByTagName("div")[i].style.top = -426 * id + "px";
        }
    }

    // update navigation bar
    for (var j = 0; j < document.getElementsByClassName("navImg").length; j++) {
        var img = document.getElementsByClassName("navImg")[j];
        if (j == id) {
            img.setAttribute("src", "../images/navRectActive.png");
        }
        else {
            img.setAttribute("src", "../images/navRectNormal.png");
        }
    }
}

