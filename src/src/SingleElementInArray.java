public class SingleElementInArray {
    public static void main(String[] args) {
        int[] arr = {1,1,4,3,2,3,2};
        System.out.println(NoDuplicates(arr));

    }
    public static int NoDuplicates(int[] arr) {
        int ans = 0;
        for (int i = 0; i < arr.length; i++) {
            ans ^= arr[i];
        }
        return ans;
    }
}
