nakedDayNow = new Date();
nakedDayStart = new Date(nakedDayNow.getFullYear(),3,9,0,0,0);
nakedDayEnd = new Date(nakedDayNow.getFullYear(),3,10,0,0,0);

if(nakedDayNow.getTime() >= nakedDayStart.getTime() && nakedDayNow.getTime() <= nakedDayEnd.getTime())
{
    var nakedDayCSS = document.getElementsByTagName('link');
    for(var nakedDayI = nakedDayCSS.length; nakedDayI >= 0; nakedDayI--)
    {
        if(nakedDayCSS[nakedDayI] && ((nakedDayCSS[nakedDayI].href.indexOf('.css') > -1 || nakedDayCSS[nakedDayI].type == 'text/css')))
        {
            nakedDayCSS[nakedDayI].parentNode.removeChild(nakedDayCSS[nakedDayI]);
        }
    }

    var nakedDayCSS = document.getElementsByTagName('style');
    for(var nakedDayI = nakedDayCSS.length; nakedDayI >= 0; nakedDayI--)
    {
        nakedDayCSS[nakedDayI].parentNode.removeChild(nakedDayCSS[nakedDayI]);
    }
}
