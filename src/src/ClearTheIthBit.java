public class ClearTheIthBit {
    public static void main(String[] args) {
        int a=13;
        int i=2;
        System.out.println(clearTheIthBit(a,i));
    }
    public static int clearTheIthBit(int n,int i){
        return ~(1<<i)&n;
    }
}
