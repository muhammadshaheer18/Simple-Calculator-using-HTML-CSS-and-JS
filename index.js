function append(value) {
    document.getElementById("result").value += value;
}

function erase() {
    document.getElementById("result").value = "";
}

function deletel() {
    var resultstorage = document.getElementById("result");
    resultstorage.value = resultstorage.value.slice(0, -1);
}

function result() {
    var resultstorage = document.getElementById("result");
    var expression = resultstorage.value;
    try {
        var answer = eval(expression);
        resultstorage.value = answer;
    } catch (error) {
        resultstorage.value = "Error";
    }
}