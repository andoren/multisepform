using System;
using System.Collections.Generic;
using System.Linq;

public class Kata {
  public static int[] DeleteNth(int[] arr, int x) {
    Dictionary<int,int> dict = new Dictonary<int,int>();
    
    List<int>result = arr.Select(value=>{
      int count = dict.GetValueOrDefault(value);
      if(count<=x){
        dict.Add(value,++count);
        return value;
      }
    });
    
  }
}