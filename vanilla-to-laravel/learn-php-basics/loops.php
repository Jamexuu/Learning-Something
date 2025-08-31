<?php

//while loop
echo "<h2>While Loop</h2>";
$counter = 1;
while ($counter <= 10){
    if($counter % 2 == 0){
        echo "$counter is even number <br>";
    }else{
        echo "$counter is odd number <br>";
    }
    $counter++;
}

//do while loop
echo "<br><h2>Do While Loop</h2>";
$dwCounter = 1;
do{
    echo "Counter is now at: $dwCounter <br>";
    $dwCounter++;
}while($dwCounter <= 10);

//for loop
echo "<br><h2>For Loop</h2>";
$length = 5;
for ($i = 1; $i <= $length; $i++){
    for ($j = $length; $j >= $i; $j--){
        echo "&nbsp;";
    }
    for ($k = 1; $k <= $i; $k++){
        echo "*";
    }
    echo "<br>";
}

//for each loop
echo "<br><h2>Foreach Loop</h2>";
$songs = ["Shouldn't be", "Never Tell", "May I Ask", "Used To Me", "Paragraphs"];
foreach ($songs as $number => $song){
    echo $number + 1 . ". $song by Luke Chiang<br>";
}