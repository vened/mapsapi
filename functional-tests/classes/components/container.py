# -*- coding: utf-8 -*-
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from component import Component
from classes.util.scripts import GetScripts
from classes.util.scripts import WheelScript
from classes.util.scripts import SetScripts
from time import time
from classes.exceptions import exceptions


class MapContainer(Component):
    selectors = {
        'self': '#map'
    }

    def zoom_selection(self):
        center = self.driver.execute_script(GetScripts.getContainerCenter)
        actions = ActionChains(self.driver)
        actions.move_to_element_with_offset(self.element, int(center['x']), int(center['y']))
        actions.key_down(Keys.SHIFT)
        actions.click_and_hold()
        actions.move_by_offset(300, 300)
        actions.release()
        actions.perform()

    def center_click(self):
        center = self.driver.execute_script(GetScripts.getContainerCenter)
        actions = ActionChains(self.driver)
        actions.move_to_element_with_offset(self.element, int(center['x']), int(center['y']))
        actions.click().perform()

    def center_dbclick(self):
        center = self.driver.execute_script(GetScripts.getContainerCenter)
        actions = ActionChains(self.driver)
        actions.move_to_element_with_offset(self.element, int(center['x']), int(center['y']))
        actions.double_click().perform()

    def wheel_zoom(self, count):
        self.driver.execute_script(WheelScript.prepare + WheelScript.wheel_levels(count))

    def set_zoom(self, level):
        self.driver.execute_script(SetScripts.set_zoom(level))

    # TODO: Модифицировать задествовав поллинг
    #
    def wait_map_init(self, timeout=3, polling=0.5):
        """
        :param timeout: timeout to rise exception
        :param polling: how often check map init
        :return: None
        """
        start = time()
        time_outed = False
        map_inited = False
        while not time_outed and not map_inited:
            map_inited = self.driver.execute_script('return !!map.getZoom')
            time_outed = time() - start > timeout
