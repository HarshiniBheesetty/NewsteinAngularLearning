

export class Helper {

    // Class variables/properties:
    public static str: string;

    // Class methods:
    public static sum(a: number, b: number): number {
        return a + b;
    }

    public static dummyMsg(): string {
        let msg: string;
        msg = "world " + 5 + " hello";
        return msg;
    }

    public static primeNum(n: number): string {

        let count: number;
        count = 0;

        for (let i: number = 1; i <= n; i++) {
            if (n % i == 0) {

                count++;

                if (count == 3) {
                    let msg1: string;
                    msg1 = n + " is not a prime number."
                    i = n + 1;
                    return msg1;
                }
            }
        }

        if (count == 2) {
            let msg2: string;
            msg2 = n + "  is a prime number."
            return msg2;
        }

    }

    public static palendrome(string1: string): string {

        let str: string;

        str = "mbhjsdfj";

        let strArry: string[] = str.split("");


        for (let i = 0; i <= Math.floor(strArry.length / 2); i++) {

            if (strArry[i] !== strArry[str.length - 1 - i]) {

                i = strArry.length;
                return "Given string is not a palindrome!";

            }

            else if (i === Math.floor(strArry.length / 2)) {
                var n = Math.floor(strArry.length / 2);
                return "Given string is a palindrome! ";
            }


        }


    }
}