
#include <iostream>
using namespace std;
int main()
{
    int arr[] = {4465, 124, 444, 27, 8, 99, 454, 84};
    int n = sizeof(arr) / sizeof(arr[0]);
    int i, j;
    for (i = 0; i < n - 1; i++)
        for (j = 0; j < n - i - 1; j++)
            if (arr[j] > arr[j + 1])
                swap(arr[j], arr[j + 1]);
    cout << "Printing the sorted array below" << endl;
    for (i = 0; i < n; i++)
    {

        cout << arr[i] << endl;
    }

    return 0;
}
