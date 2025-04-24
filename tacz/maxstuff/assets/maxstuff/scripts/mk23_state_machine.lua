-- 脚本的位置是 "{命名空间}:{路径}"，那么 require 的格式为 "{命名空间}_{路径}"
-- 注意！require 取得的内容不应该被修改，应仅调用
local default = require("tacz_manual_action_state_machine")
local STATIC_TRACK_LINE = default.STATIC_TRACK_LINE
local MAIN_TRACK = default.MAIN_TRACK
local GUN_KICK_TRACK_LINE = default.GUN_KICK_TRACK_LINE
local main_track_states = default.main_track_states
local gun_kick_state = default.gun_kick_state
-- main_track_states.idle 是我们要重写的状态。
local shoot_state = setmetatable({},{__index = gun_kick_state})
local idle_state = setmetatable({}, {__index = main_track_states.idle})
-- reload_state、bolt_state 是定义的新状态，用于执行单发装填

function shoot_state.transition(this, context, input)
    if (input == INPUT_SHOOT) then
        local track = context:findIdleTrack(GUN_KICK_TRACK_LINE, false)
        if (context:getFireMode() == SEMI) then
            if (not (context:getAmmoCount() == 0)) then
                context:runAnimation("shoot_semi", track, true, PLAY_ONCE_STOP, 0)
            else
                context:runAnimation("shoot", track, true, PLAY_ONCE_STOP, 0)
            end
        elseif (context:getFireMode() == BURST) then
            context:runAnimation("shoot", track, true, PLAY_ONCE_STOP, 0)   
            context:popShellFrom(0)
        end
    end
    return nil
end

local M = setmetatable({
    gun_kick_state = setmetatable({},{__index = shoot_state})
}, {__index = default})

return M