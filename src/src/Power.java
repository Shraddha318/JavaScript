public class Power {
    public static void main(String[] args) {
        int a=3;
        int b=2;
        power(a,b);

    }
    public static void power(int a, int b) {
        int ans=1;
        while(b>0 ){
            if((b&1)==1){
                ans=ans*a;
            }
            a=a*a;
            b=b>>1;
        }
        System.out.println(ans);
    }
}
