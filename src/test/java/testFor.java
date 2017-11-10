import java.util.Scanner;

/**
 * Created by paddy.zhong on 10/18/2017.
 */
public class testFor {
    public static void main(String[] args){
        //定义一个三行两列的整型二维数组intArray
        int[][] intArray = new int[3][2];


        //从键盘输入学生成绩，要求输入顺序与效果图一致
        Scanner sc = new Scanner(System.in);
        for(int i=0;i<intArray.length;i++){
            for(int j=0;j<intArray[i].length;j++){
                if(j==0){
                    System.out.println("请输入第"+(i+1)+"个学生的语文成绩");
                }else if(j==1){
                    System.out.println("请输入第"+(i+1)+"个学生的数学成绩");
                }
                intArray[i][j] = sc.nextInt();
            }
        }


        //求语文的总成绩和平均分
        int sum=0;
        for(int i=0;i<intArray.length;i++){
            for(int j=0;j<intArray[i].length;j++){
                if(j==0){
                    sum+=intArray[i][j];
                }
            }
        }
        System.out.println("语文的总成绩为:"+sum);
        double avg = sum/3;
        System.out.println("语文的平均分为:"+avg);

        //求数学的总成绩和平均分
        int sum1=0;
        for(int i=0;i<intArray.length;i++){
            for(int j=0;j<intArray[i].length;j++){
                if(j==1){
                    sum1+=intArray[i][j];
                }
            }
        }
        System.out.println("数学的总成绩为:"+sum1);
        double avg1 = sum1/3;
        System.out.println("数学的平均分为:"+avg1);

    }
}
