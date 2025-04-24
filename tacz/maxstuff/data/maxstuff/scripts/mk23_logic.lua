local M = {}

function M.shoot(api)
    if(api:getFireMode() == BURST)then
        api:shootOnce(api:isShootingNeedConsumeAmmo())
        if (api:removeAmmoFromMagazine(1) == 1) then
            api:setAmmoInBarrel(true)
        end
    end
    if(api:getFireMode() == SEMI)then
        api:shootOnce(api:isShootingNeedConsumeAmmo())
    end
end

function M.start_bolt(api)
    return true
end

return M