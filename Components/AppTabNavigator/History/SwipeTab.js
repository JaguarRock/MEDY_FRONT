import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation';
import MedicineList from './MedicineList';
import MedicineCalendar from './MedicineCalendar';

const AppNavigator = createMaterialTopTabNavigator(
    {
        List: MedicineList,
        Calendar: MedicineCalendar
    }
)