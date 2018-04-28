//
//  ModuleManager.m
//  AppDemo
//
//  Created by yuling on 2018/4/27.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "ModuleManager.h"

@implementation ModuleManager


RCT_EXPORT_MODULE();

// 接收传过来的 NSString
RCT_EXPORT_METHOD(addEventOne:(NSString *)name){
//  UIAlertController *alert = [[UIAlertController alertControllerWithTitle:name message:name preferredStyle:UIAlertControllerStyleAlert];
  UIAlertView *alert = [[UIAlertView alloc] initWithTitle:name message:name delegate:nil cancelButtonTitle:@"cancel" otherButtonTitles:nil, nil];
  [alert show];
  NSLog(@"接收传过来的NSString+NSString: %@", name);
}
// 接收传过来的 NSString + NSDictionary
RCT_EXPORT_METHOD(addEventTwo:(NSString *)name details:(NSDictionary *)details)
{
  RCTLogInfo(@"接收传过来的NSString+NSDictionary: %@ %@", name, details);
}

// 接收传过来的 NSString + date日期
RCT_EXPORT_METHOD(addEventThree:(NSString *)name date:(NSDate *)date)
{
  NSDateFormatter *formatter = [[NSDateFormatter alloc] init] ;
  [formatter setDateFormat:@"yyyy-MM-dd"];
  RCTLogInfo(@"接收传过来的NSString+NSDictionary: %@ %@", name, [formatter stringFromDate:date]);
}

//  对外提供调用方法,演示Callback
RCT_EXPORT_METHOD(testCallbackEventOne:(NSString *)name callback:(RCTResponseSenderBlock)callback)
{
  NSLog(@"%@",name);
  NSArray *events=@[@"1", @"2", @"3",@"4"]; //准备回调回去的数据
  callback(@[[NSNull null],events]);
}

//Promises
//  对外提供调用方法,演示Promise使用
RCT_REMAP_METHOD(testCallbackEventTwo,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSArray *events =@[@"one ",@"two ",@"three"];//准备回调回去的数据
  if (events) {
    resolve(events);
  } else {
    NSError *error=[NSError errorWithDomain:@"我是Promise回调错误信息..." code:101 userInfo:nil];
    reject(@"no_events", @"There were no events", error);
  }
}

- (NSDictionary *)constantsToExport
{
  return @{ @"ValueOne": @"我是从原生定义的~" };
}


@end
