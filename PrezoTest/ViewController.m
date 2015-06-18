//
//  ViewController.m
//  PrezoTest
//
//  Created by Kelly Davis on 6/17/15.
//  Copyright (c) 2015 Kelly Davis. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    [self loadExample:@"example1"];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)buttonClick:(id)sender {
    UISegmentedControl *segmentedControl = (UISegmentedControl *) sender;
    NSInteger selectedSegment = segmentedControl.selectedSegmentIndex;

    NSString *exampleName = @"example1";
    
    if (selectedSegment == 0) {
        exampleName = @"example1";
    } else if (selectedSegment == 1) {
        exampleName = @"example2";
    } else if (selectedSegment == 2) {
        exampleName = @"example3";
    } else if (selectedSegment == 3) {
        exampleName = @"example4";
    } else if (selectedSegment == 4) {
        exampleName = @"example5";
    } else if (selectedSegment == 5) {
        exampleName = @"example6";
    } else if (selectedSegment == 6) {
        exampleName = @"example7";
    } else if (selectedSegment == 7) {
        exampleName = @"example8";
    }
    
    [self loadExample:exampleName];
}

- (void) loadExample:(NSString*)exampleName {
    if ( exampleName != nil ) {
        NSString *examplePath = [NSString stringWithFormat:@"%@/%@", exampleName, exampleName];
        
        NSString *htmlFile = [[NSBundle mainBundle] pathForResource:examplePath ofType:@"html"];
        
        NSString* htmlString = [NSString stringWithContentsOfFile:htmlFile encoding:NSUTF8StringEncoding error:nil];
        
        NSString *path = [NSString stringWithFormat:@"%@/%@", [[NSBundle mainBundle] bundlePath], exampleName];
        
        NSURL *baseURL = [NSURL fileURLWithPath:path];
        [_webView loadHTMLString:htmlString baseURL:baseURL];
    }
}
@end
