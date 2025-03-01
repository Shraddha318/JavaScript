import com.sun.source.tree.UsesTree;

public class SetTheIthBit {
    public static void main(String[] args) {
        int a=13;
        int i=2;
        System.out.println(setTheIthBit(a,i));

    }
    public static int setTheIthBit(int a,int i){
        return (1<<i)&a;
    }
}
