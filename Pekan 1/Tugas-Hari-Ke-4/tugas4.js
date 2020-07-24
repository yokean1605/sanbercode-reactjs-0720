var start = 2,
    end = 20,
    run = true;
while (start < end) {
    if (start == 2) {
        console.log("Looping Pertama");
    }
    console.log(start + " - " + "I love coding");
    start += 2;
}
while (end > start) {
    if (end == 20) {
        console.log("Looping Kedua");
    }
    console.log(end + " - " + "I love coding");
    end -= 2;
}