public class MaximumBitFlips {
    public static void main(String[] args) {

    }
    public static int maximumBitFlips(int start, int goal) {
        int count = 0;
        int ans = start ^ goal;
        for (int i = 0; i < 32; i++) {
            if ((ans & (1 << i)) != 0) {
                count++;
            }
        }
        return count;
    }

}
