document.getElementById('showScoresBtn').addEventListener('click', function() {
    document.getElementById('Sort_btn_container').style.display = 'flex';
    document.getElementById('showScoresBtn').style.display = 'none';
    
    document.getElementById('SortScore').style.display = 'block';
    document.getElementById('SortDate').style.display = 'block';
    document.getElementById('SortGame').style.display = 'block';
    document.getElementById('Go_Back2').style.display = 'block';
});

document.getElementById('SortScore').addEventListener('click', function() {
    document.getElementById('Sort_By_Score').style.display = 'flex';
    document.getElementById('SortScore').style.display = 'none';
    document.getElementById('SortDate').style.display = 'none';
    document.getElementById('SortGame').style.display = 'none';
    document.getElementById('Go_Back').style.display = 'block';
    document.getElementById('Go_Back2').style.display = 'none';
});

document.getElementById('SortDate').addEventListener('click', function() {
    document.getElementById('Sort_By_Date').style.display = 'flex';
    document.getElementById('SortDate').style.display = 'none';
    document.getElementById('SortScore').style.display = 'none';
    document.getElementById('SortGame').style.display = 'none';
    document.getElementById('Go_Back').style.display = 'block';
    document.getElementById('Go_Back2').style.display = 'none';
});

document.getElementById('SortGame').addEventListener('click', function() {
    document.getElementById('Sort_By_Game').style.display = 'flex';
    document.getElementById('SortGame').style.display = 'none';
    document.getElementById('SortDate').style.display = 'none';
    document.getElementById('SortScore').style.display = 'none';
    document.getElementById('Go_Back').style.display = 'block';
    document.getElementById('Go_Back2').style.display = 'none';
});

document.getElementById('Go_Back').addEventListener('click', function() {
    document.getElementById('SortScore').style.display = 'block';
    document.getElementById('SortDate').style.display = 'block';
    document.getElementById('SortGame').style.display = 'block';
    document.getElementById('Sort_By_Score').style.display = 'none';
    document.getElementById('Sort_By_Date').style.display = 'none';
    document.getElementById('Sort_By_Game').style.display = 'none';
    document.getElementById('Go_Back').style.display = 'none';
    document.getElementById('Go_Back2').style.display = 'block';
});

document.getElementById('Go_Back2').addEventListener('click', function() {
    document.getElementById('Sort_btn_container').style.display = 'none';
    document.getElementById('showScoresBtn').style.display = 'block';
});

document.getElementById('sortOldest').addEventListener('click', function() {
    $.ajax({
        url: 'sort_score.php',
        type: 'POST',
        data: { sort_date: 'oldest' },
        success: function(response) {
            $('#score_body').html(response);
        }
    });
});

document.getElementById('sortLatest').addEventListener('click', function() {
    $.ajax({
        url: 'sort_score.php',
        type: 'POST',
        data: { sort_date: 'latest' },
        success: function(response) {
            $('#score_body').html(response);
        }
    });
});

document.getElementById('sortHighest').addEventListener('click', function() {
    $.ajax({
        url: 'sort_score.php',
        type: 'POST',
        data: { sort_score: 'highest' },
        success: function(response) {
            $('#score_body').html(response);
        }
    });
});

document.getElementById('sortLowest').addEventListener('click', function() {
    $.ajax({
        url: 'sort_score.php',
        type: 'POST',
        data: { sort_score: 'lowest' },
        success: function(response) {
            $('#score_body').html(response);
        }
    });
});

// Add event listeners dynamically for game type buttons
document.querySelectorAll('[id^=choose]').forEach(button => {
    button.addEventListener('click', function() {
        const gameType = button.textContent.trim();
        $.ajax({
            url: 'sort_score.php',
            type: 'POST',
            data: { sort_game: gameType },
            success: function(response) {
                $('#score_body').html(response);
            }
        });
    });
});


$(document).ready(function() {
    $('#showScoresBtn').on('click', function() {
        $.ajax({
            url: 'show_scores.php',
            type: 'POST',
            data: { show: 1 },
            success: function(response) {
                $('#score_body').html(response);
            }
        });
    });
});


