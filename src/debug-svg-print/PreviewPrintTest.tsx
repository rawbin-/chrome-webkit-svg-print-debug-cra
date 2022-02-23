import MonitorInfo, { LineChart } from './MonitorInfo';
import React from 'react';
import localData from './preview-print-test-data';
import DemoLine from "../DemoLine";
import { Card, List } from "antd";

const ReportDetail: React.FC = () => {
    console.log(localData);
    return (
            <div id={'report-preview'}>
                <Card style={{ width: '100%' }} title={'监控指标'}>
                    <MonitorInfo localData={localData}/>
                </Card>
                // 如下这种写法无法打印预览svg图
                <Card style={{ width: '100%' }} title={'监控指标'}>
                    <List
                            dataSource={localData}
                            renderItem={(item) => {
                                return LineChart(item as any)
                            }}
                    ></List>
                </Card>
                // 如下这种写法无法打印预览svg图
                <Card style={{ width: '100%' }} title={'监控指标'}>
                    <List
                            dataSource={localData}
                            renderItem={(item) => {
                                return <List.Item>
                                    <Card>
                                        {LineChart(item as any)}
                                    </Card>
                                </List.Item>
                            }}
                    ></List>
                </Card>
                // 如下这种写法可以打印预览svg图
                <Card style={{ width: '100%' }} title={'监控指标'}>
                    <List
                            dataSource={localData.map(item => LineChart(item as any))}
                            renderItem={(item) => {
                                return <List.Item>
                                    <Card>
                                        {item}
                                    </Card>
                                </List.Item>
                            }}
                    ></List>
                </Card>
                <DemoLine></DemoLine>
                <Card style={{ width: '100%' }} title={'监控指标'}>
                    <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 1,
                                md: 2,
                                lg: 2,
                                xl: 2,
                                xxl: 3,
                            }}
                            dataSource={[<DemoLine></DemoLine>, <DemoLine></DemoLine>]}
                            renderItem={(item) => {
                                return <List.Item>
                                    <Card>
                                        {item}
                                    </Card>
                                </List.Item>
                            }}
                    >
                    </List>
                </Card>
            </div>
    );
};

export default ReportDetail;
