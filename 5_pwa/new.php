<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>New Reservation</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" type="text/javascript"></script>
    </head>
    <body>
        <?php
            // перевірка додавання броні
            //is_numeric($_GET['id']) or die("invalid URL");

            require_once '_db.php';

            $rooms = $db->query('SELECT * FROM rooms');

            $start = $_GET['start']; // ЗРОБИТИ правильне форматування
            $end = $_GET['end']; // ЗРОБИТИ правильне форматування
        ?>
        <form id="f" action="backend_create.php" style="padding:20px;">
            <h1>New Reservation</h1>
            <div>Name: </div>
            <div><input type="text" id="name" name="name" value="" /></div>
            <div>Start:</div>
            <div><input type="text" id="start" name="start" value="<?php echo $start ?>" /></div>
            <div>End:</div>
            <div><input type="text" id="end" name="end" value="<?php echo $end ?>" /></div>
            <div>Room:</div>
            <div>
                <select id="room" name="room">
                    <?php
                        foreach ($rooms as $room) {
                            $selected = $_GET['resource'] == $room['id'] ? ' selected="selected"' : '';
                            $id = $room['id'];
                            $name = $room['name'];
                            print "<option value='$id' $selected>$name</option>";
                        }
                    ?>
                </select>

            </div>
            <div class="space"><input type="submit" value="Save" /> <a href="javascript:close();">Cancel</a></div>
        </form>
        <script type="text/javascript">
            function close(result) {
                if (parent && parent.DayPilot && parent.DayPilot.ModalStatic) {
                    parent.DayPilot.ModalStatic.close(result);
                }
            }

            $("#f").submit(function () {
                var f = $("#f");
                $.post(f.attr("action"), f.serialize(), function (result) {
                    close(eval(result));
                });
                return false;
            });

            $(document).ready(function () {
                $("#name").focus();
            });

        </script>
    </body>
</html>