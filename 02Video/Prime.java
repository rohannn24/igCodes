import java.util.Scanner;

public class Prime{
    static boolean checkPrime(int x){
        boolean flag = false;
        for(int i = 2; i<x/2; i++){
            if(x%i == 0){
                flag = true;
            } else{
                flag = false;
            }
        }
        return flag;
    }
    
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter a number:");
        int x = scan.nextInt();
        boolean flag = checkPrime(x);
        if(flag == true){
            System.out.println("notPrime");
        } else{
            System.out.println("isPrime");
        }
        scan.close();
    }
}