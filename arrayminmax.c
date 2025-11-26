#include<stdio.h>
int main()
{
	int a[10],n,i,min,max;
	scanf("%d",&n);
	
	for (i=0;i<n;i++)
	
	scanf("%d",&a[i]);
	min=max=a[0];
	
	for (i=0;i<n;i++)
	
	{
		if (a[i]>max)
		max=a[i];
		if (a[i]<min)
		min=a[i];
	}
	printf(" Min=%d\n Max=%d\n",min,max);
	return 0;
}
