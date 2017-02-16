/**
 * Created by qq799 on 2017/2/9.
 */
function PointLine_Disp(xx, yy, x1, y1, x2, y2)
{
    var a, b, c, ang1, ang2, ang, m;
    var result = 0;
    //分别计算三条边的长度
    a = Math.sqrt((x1 - xx) * (x1 - xx) + (y1 - yy) * (y1 - yy));
    if (a == 0)
        return -1;
    b = Math.sqrt((x2 - xx) * (x2 - xx) + (y2 - yy) * (y2 - yy));
    if (b == 0)
        return -1;
    c = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    //如果线段是一个点则退出函数并返回距离
    if (c == 0)
    {
        result = a;
        return result;
    }
    //如果点(xx,yy到点x1,y1)这条边短
    if (a < b)
    {
        //如果直线段AB是水平线。得到直线段AB的弧度
        if (y1 == y2)
        {
            if (x1 < x2)
                ang1 = 0;
            else
                ang1 = Math.PI;
        }
        else
        {
            m = (x2 - x1) / c;
            if (m - 1 > 0.00001)
                m = 1;
            ang1 = Math.acos(m);
            if (y1 >y2)
                ang1 = Math.PI*2  - ang1;//直线(x1,y1)-(x2,y2)与折X轴正向夹角的弧度
        }
        m = (xx - x1) / a;
        if (m - 1 > 0.00001)
            m = 1;
        ang2 = Math.acos(m);
        if (y1 > yy)
            ang2 = Math.PI * 2 - ang2;//直线(x1,y1)-(xx,yy)与折X轴正向夹角的弧度

        ang = ang2 - ang1;
        if (ang < 0) ang = -ang;

        if (ang > Math.PI) ang = Math.PI * 2 - ang;
        //如果是钝角则直接返回距离
        if (ang > Math.PI / 2)
            return a;
        else
            return a * Math.sin(ang);
    }
    else//如果(xx,yy)到点(x2,y2)这条边较短
    {
        //如果两个点的纵坐标相同，则直接得到直线斜率的弧度
        if (y1 == y2)
            if (x1 < x2)
                ang1 = Math.PI;
            else
                ang1 = 0;
        else
        {
            m = (x1 - x2) / c;
            if (m - 1 > 0.00001)
                m = 1;
            ang1 = Math.acos(m);
            if (y2 > y1)
                ang1 = Math.PI * 2 - ang1;
        }
        m = (xx - x2) / b;
        if (m - 1 > 0.00001)
            m = 1;
        ang2 = Math.acos(m);//直线(x2-x1)-(xx,yy)斜率的弧度
        if (y2 > yy)
            ang2 = Math.PI * 2 - ang2;
        ang = ang2 - ang1;
        if (ang < 0) ang = -ang;
        if (ang > Math.PI) ang = Math.PI * 2 - ang;//交角的大小
        //如果是对角则直接返回距离
        if (ang > Math.PI / 2)
            return b;
        else
            return b * Math.sin(ang);//如果是锐角，返回计算得到的距离
    }
}
