$(function () {

    //saving DOM objects to variables
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('.pole');
    var pole01 = $('#pole01');
    var pole02 = $('#pole02');
    var score = $('#score');
    var speed_Span = $('#speed');
    var restart_btn = $('#restart_btn');

    //saving some initial setup
    var container_width = parseInt(container.width());
    var container_Height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var speed = 10;
    var inTime = 40


// other declaration
    var go_up = false;

    var the_game = setInterval(run, inTime);

    function run() {

            var pole_current_position = parseInt(pole.css('right'));


            //check whether the poles went of the containeer

            if (pole_current_position > container_width) {
                var new_height = parseInt(Math.random() * 40);

                //change the pole's height
                pole01.css("height", pole_initial_height + new_height);
                pole02.css("height", pole_initial_height + new_height);

                pole_current_position = pole_initial_position;

                // increase speed
                speed = speed + 1;
                speed_Span.text(speed);
                if (speed == 50) {
                    speed = 20;
                }
            }


            //move the pole
            pole.css('right', pole_current_position + speed);

            if (go_up == false) {
                go_Down();
            }

        $(document).on("keydown", function (e) {
            var key = e.keyCode;
            if (key == 38 && go_up == false) {
                go_up = setInterval(up_bird, 40);
            }
        });
        $(document).on("keyup", function (e) {
            var key = e.keyCode;
            if (key == 40) {
                clearInterval(go_up);
                go_up = false;
            }
        });

        function go_Down() {
           var s= bird.css("top");
          var nu=  s.substr(0,s.length-2);
            if (parseInt(nu)<=300){
                bird.css("top", parseInt(bird.css("top")) + 5);
            }

        }

        function up_bird() {
            var s= bird.css("top");
            var nu=  s.substr(0,s.length-2);
            if (parseInt(nu)>=0){
                bird.css("top", parseInt(bird.css("top")) - 5);
            }
        }

        function stopThegame() {
            clearInterval(the_game);
            restart_btn.slideDown();
        }

        $('restart_btn').click(function () {
           run();
        });
    }
});