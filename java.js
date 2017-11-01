var today = new Date();

console.log(today);
var todayDay = today.getDate();
var todayMonth = today.getMonth() + 1;
console.log(todayDay);
console.log(todayMonth);

function findHoroscope() {
    var a = document.getElementById("Month").value;
    a = parseInt(a);
    var b = document.getElementById("Date").value;
    b = parseInt(b);
    var c = document.getElementById("Year").value;
    c = parseInt(c);


    if(todayDay === b && todayMonth === a){
        document.getElementById("horoscope").innerHTML = determineHoroscope(a,b);
        document.getElementById("message2").innerHTML = specialMessage();
        document.getElementById("image").innerHTML = horoscopeImage();
        document.getElementById("zodiac").innerHTML = getZodiac(c);
    }else{
        document.getElementById("horoscope").innerHTML = determineHoroscope(a,b);
        document.getElementById("message").innerHTML = horoscopeMessage();
        document.getElementById("image").innerHTML = horoscopeImage();
        document.getElementById("zodiac").innerHTML = getZodiac(c);
    }


}

function determineHoroscope(a,b){
    sign = 0;
    if(a === 1 ){
        if(b < 21){
            sign = 1;
            return "You are a Capricorn";
        }
        sign = 2;
        return "You are an Aquarius";
    }
    if(a === 2){
        if(b < 20){
            sign = 2;
            return "You are an Aquarius";
        }else if(b < 30){
            sign = 3;
            return "You are a Pisces";
        }

    }
    if(a === 3){
        if(b < 21){
            sign = 3;
            return "You are a Pisces";
        }
        sign = 4;
        return "You are an Aries";

    }
    if(a === 4){
        if(b < 21){
            sign = 4;
            return "You are an Aries";
        }else if(b < 31){
            sign = 5;
            return "You are a Taurus";
        }
    }
    if(a === 5){
        if(b < 22){
            sign = 5;
            return "You are a Taurus!";
        }
        sign = 6;
        return "You are an Gemini";
    }
    if(a === 6){
        if(b < 22){
            sign = 6;
            return "You are an Gemini";
        }else if(b < 31){
            sign = 7;
            return "You are a Cancer";
        }
    }
    if(a === 7){
        if(b < 23){
            sign = 7;
            return "You are a Cancer";
        }
        sign = 8;
        return "You are an Leo";
    }
    if(a === 8){
        if(b < 23){
            sign = 8;
            return "You are a Leo";
        }
        sign = 9;
        return "You are an Virgo";
    }
    if(a === 9){
        if(b < 24){
            sign = 9;
            return "You are an Virgo";
        }else if(b < 31){
            sign = 10;
            return "You are a Libra";
        }
    }
    if(a === 10){
        if(b < 24){
            sign = 10;
            return "You are a Libra";
        }
        sign = 11;
        return "You are a Scorpio";
    }
    if(a === 11){
        if(b < 23){
            sign = 11;
            return "You are a Scorpio";
        }else if(b < 31){
            sign = 12;
            return "You are a Saggitarius";
        }
    }
    if(a === 12){
        if(b < 22){
            sign = 12;
            return "You are a Saggitarius";
        }else if(b < 31){
            sign = 1;
            return "You are a Capricorn";
        }
    }
    if(sign === 0){
        return "Please enter a valid date";
    }
}
function horoscopeImage(){
    if(sign === 1){
        return "<img src='Images/images/capricorn.png'/>";
    }
    if(sign === 2){
        return "<img src='Images/images/aquarius.png'/>";
    }
    if(sign === 3){
        return "<img src='Images/images/pisces.png'/>";
    }
    if(sign === 4){
        return "<img src='Images/images/aries.jpg'/>";
    }
    if(sign === 5){
        return "<img src='Images/images/taurus.png'/>";
    }
    if(sign === 6){
        return "<img src='Images/images/gemini.png'/>";
    }
    if(sign === 7){
        return "<img src='Images/images/cancer.png'/>";
    }
    if(sign === 8){
        return "<img src='Images/images/leo.png'/>";
    }
    if(sign === 9){
        return "<img src='Images/images/virgo.png'/>";
    }
    if(sign === 10){
        return "<img src='Images/images/Libra.png'/>";
    }
    if(sign === 11){
        return "<img src='Images/images/scorpio.png'/>";
    }
    if(sign === 12){
        return "<img src='Images/images/sagitarrius.png'/>";
    }
}
function horoscopeMessage(){
    if(sign === 1){
        return " A new sort of bond may form with someone you consider a friend. Perhaps you discover a mutual interest or suddenly see your friend in a" +
            " new light. This can be beautiful, but before you make any commitment, make an effort to get to know the person a little better." +
            " Your image of him or her might be clouded by idealism. You might not see the person objectively. ";
    }
    if(sign === 2){
        return "Something important to you is changing. You're beginning to doubt whether there's a future in it or not." +
            " It may be a career or a romantic relationship. Confusion may dominate your thoughts today. You aren't comfortable with an uncertain future." +
            " You need to give this a lot of thought before deciding. Hang in there. ";
    }
    if(sign === 3){
        return " Vague physical discomfort could have you feeling out of sorts. Most likely you aren't really ill. You're tired and stressed," +
            " but you can make it through the day. Disillusionment with someone you've admired could also be on your mind. You could be seeking someone" +
            " else for a role model. You'll feel better tomorrow! ";
    }
    if(sign === 4){
        return "A long-awaited romantic encounter may be canceled or prove less rewarding than you'd hoped. Doubts about the future of this relationship could " +
            "come up. This isn't the day to" +
            " make any final decisions about serious matters like this. Wait a few days until you feel a little more confident and then make up your mind. ";
    }
    if(sign === 5){
        return "A visitor to your home might bring unreliable information. Don't take at face value whatever this person says. As far as romance is " +
            "concerned, your passions are high and your need for intimacy about the same. It's unlikely that you'll have any truly romantic encounters " +
            "today, at least satisfying ones. If the opportunity comes your way, it might be best to make a date for a later time.";
    }
    if(sign === 6){
        return "A passionate letter or phone call could come from a close friend or romantic partner. The person may be confused and rather emotionally" +
            " tormented. Be kind! If you've been thinking about doing some writing, this is the day." +
            " Your imagination is flying high. Let the words flow and don't get too caught up with grammar and structure now. You can edit later. ";
    }
    if(sign === 7){
        return "You could have an artistic talent that you haven't yet tapped. Today events might occur that cause you to want to try. " +
            "This is a good time, as your inspiration is high. Don't judge yourself too harshly if your " +
            "efforts don't quite fit your expectations. Cut yourself some slack. More experience is needed before you can really fit your vision to your skill.";
    }
    if(sign === 8){
        return " Family members may want to make changes in your home, such as remodeling, redecorating, or refurnishing, but there could be " +
            "disagreements about the changes needed. Everyone will have a different idea. " +
            "This isn't a good day to make such plans. It's unlikely that any agreement will be reached now. Put off the planning until another time. ";
    }
    if(sign === 9){
        return "Miscommunication with a romantic partner could have you either writing or reading love poetry or a story of some kind." +
            " It's more important that you clear up the misunderstanding with the special person in your life. Cheer up. Don't let your" +
            " insecurity get the better of you. All isn't as bad as it seems. The end of the day could bring a passionate reconciliation. ";
    }
    if(sign === 10){
        return " A close friend or group with which you're associated could have money troubles. You might be asked to help, but be careful. " +
            "It's doubtful that the person or organization will be able to pay you back. A goal that you've been working" +
            " toward could get stalled, but this isn't the day to try to jump-start it. You may lack information. Take a day off and then fix it.";
    }
    if(sign === 11){
        return " You like people but sometimes you can be very critical. Today you may have a hard time integrating yourself into a group. " +
            "The group dynamic may not appeal to you. All you want to do is break away. Try to overcome that feeling and observe your resistance. " +
            "Try to find your place in the group and play along without faking it.";
    }
    if(sign === 12){
        return " Confusion about metaphysical or spiritual matters could have you seeking clarity through research. " +
            "Talking with friends could prove beneficial, but it's important to remember that they could be as perplexed as you. " +
            "Interesting discussions and technology will make a difference." +
            " A friend may prove untrustworthy, so be careful about the people you share confidences with now.";
    }
}

function getZodiac(c){
    var zodiac = "";
    if(c === 2001 || c === 2013 || c === 1989 || c === 1977 || c === 1965){
        var zodiac = "You are a Snake, sssss" + "<img src='Images/zodiac/snake.jpg'/>";
    }
    if(c == 2018 || c == 2006 || c == 1994 || c == 1982 || c== 1970){
        var zodiac = "You are a Dog, roof!" + "<img src='Images/zodiac/dog.jpg'/>";
    }
    if(c == 2017 || c == 2005 || c == 1993 || c == 1981 || c== 1969){
        var zodiac = "You are a Rooster, gobble gobble" + "<img src='Images/zodiac/rooster.jpg'/>";
    }
    if(c == 2016 || c == 2004 || c == 1992 || c == 1980 || c== 1968){
        var zodiac = "You are a Monkey, ooo aaa" + "<img src='Images/zodiac/monkey.jpg'/>";
    }
    if(c == 2015 || c == 2003 || c == 1991 || c == 1979 || c== 1967){
        var zodiac = "You are a Ram" + "<img src='Images/zodiac/ram.jpg'/>";
    }
    if(c == 2014 || c == 2002 || c == 1990 || c == 1978 || c=== 1966){
        var zodiac = "You are a Horse, neighhh" + "<img src='Images/zodiac/horse.jpg'/>";
    }
    if(c == 2012 || c == 2000 || c == 1988 || c == 1976 || c=== 1964){
        var zodiac = "You are a Dragon, hiss" + "<img src='Images/zodiac/dragon.jpg'/>";
    }
    if(c == 2011 || c == 1999 || c == 1987 || c == 1975 || c=== 1963){
        var zodiac = "You are a Hare" + "<img src='Images/zodiac/hare.jpg'/>";
    }
    if(c == 2010 || c == 1998 || c == 1986 || c == 1974 || c=== 1962){
        var zodiac = "You are a Tiger, grrr" + "<img src='Images/zodiac/tiger.jpg'/>";
    }
    if(c == 2009 || c == 1997 || c == 1985 || c == 1973 || c=== 1961){
        var zodiac = "You are an Ox" + "<img src='Images/zodiac/ox.jpg'/>";
    }
    if(c == 2008 || c == 1996 || c == 1984 || c == 1972 || c === 1960){
         zodiac = "You are a Rat  " + "<img src='Images/zodiac/rat.jpg'/>";
    }
    if(c == 2007 || c == 1995 || c == 1983 || c == 1971 || c=== 2019){
        var zodiac = "You are a Pig, oinka" + "<img src='Images/zodiac/pig.png'/>";
    }
    return zodiac;
}
function specialMessage(){
    return "Today you will die :(";
}
//end