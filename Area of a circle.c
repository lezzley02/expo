#include<stdio.h>
#include<math.h>
#define PI 3.1415

int main()
{
	int r;
	float a;
		printf("ENTER THE RADIUS :");
	scanf("%d,",&r);
	a=PI*pow(r,2);
	printf("THE AREA OF THE CIRCLE IS :%f\n",a);
	
	return 0;
}

