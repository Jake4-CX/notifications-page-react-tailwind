import React, { useState } from "react";

export function Notifications() {

  let [newNotifications, setNewNotifications] = useState([0, 1, 2]);

  function newNotificationCount() {
    return newNotifications.length;
  }

  function isNew(id: number) {
    return newNotifications.includes(id);
  }

  function markAllAsRead() {
    setNewNotifications([]);
  }

  function addNewNotification(id: number) {
    setNewNotifications([...newNotifications, id]);
  }

  function toggleNotification(id: number) {
    if (newNotifications.includes(id)) {
      removeNewNotification(id);
    } else {
      addNewNotification(id);
    }
  }

  function removeNewNotification(id: number) {
    setNewNotifications(newNotifications.filter(notification => notification !== id));
  }

  return (
    <div className="w-full lg:w-[715px] bg-white rounded-lg absolute shadow-sm">
      
      <div className="p-6">
        <div className="flex flex-row gap-x-6 mb-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <a className="bg-[#0a3279] font-bold text-white rounded-lg px-3 my-auto">{newNotificationCount()}</a>
          <a onClick={markAllAsRead} className="text-[#868690] m-auto mr-0 cursor-pointer duration-200 hover:text-[#43608c]">Mark all as read</a>
        </div>

        {/* Mark Webber */}

        <div className="flex flex-col gap-x-3 gap-y-2">
          <div onClick={() => toggleNotification(0)} className={isNew(0) == true ? "message-container message-container-new" : "message-container"}>
            <img className="person-icon" src="/images/avatar-mark-webber.webp" alt="user icon"/>
            <div className="ml-4 w-full">
              <a>
                <span className="person-name">Mark Webber</span>
                <span className="ml-2 mr-1 message-describe">reacted to your recent post</span>
                <span className="person-group-name">My first tournament today!</span>
                <span className={isNew(0) == true ? "new-message-dot" : ""}/>
              </a>
              <div className="">
                <p className="message-duration">1m ago</p>
              </div>
            </div>
          </div>

          {/* Angela Gray */}

          <div onClick={() => toggleNotification(1)} className={isNew(1) == true ? "message-container message-container-new" : "message-container"}>
            <img className="person-icon" src="/images/avatar-angela-gray.webp" alt="user icon"/>
            <div className="ml-4 w-full">
              <a>
                <span className="person-name">Angela Gray</span>
                <span className="ml-2 message-describe">followed you</span>
                <span className={isNew(1) == true ? "new-message-dot" : ""}/>
              </a>
              <div className="">
                <p className="message-duration">5m ago</p>
              </div>
            </div>
          </div>

          {/* Jacob Thompson */}

          <div onClick={() => toggleNotification(2)} className={isNew(2) == true ? "message-container message-container-new" : "message-container"}>
            <img className="person-icon" src="/images/avatar-jacob-thompson.webp" alt="user icon"/>
            <div className="ml-4 w-full">
              <a className="gap-x-2">
                <span className="person-name">Jacob Thompson</span>
                <span className="ml-2 mr-1 message-describe">has joined your group</span>
                <span className="person-group-name">Chess Club</span>
                <span className={isNew(2) == true ? "new-message-dot" : ""}/>
              </a>
              <div className="">
                <p className="message-duration">1m ago</p>
              </div>
            </div>
          </div>

          {/* Rizky Hasanuddin */}

          <div onClick={() => toggleNotification(3)} className={isNew(3) == true ? "message-container message-container-new" : "message-container"}>
            <img className="person-icon mt-0" src="/images/avatar-rizky-hasanuddin.webp" alt="user icon"/>
            <div className="ml-4 w-full">
              <a>
                <span className="person-name">Rizky Hasanuddin</span>
                <span className="ml-2 message-describe">sent you a private message</span>
                <span className={isNew(3) == true ? "new-message-dot" : ""}/>
              </a>
              <div className="">
                <p className="message-duration">5 days ago</p>
              </div>
              <div className="">
                <p className="text-[#73757f] p-3 mt-3 duration-150 hover:bg-[#e4eff9] hover:border-[#e4eff9] border-[##eff1f3] border-2 rounded-lg">
                  Hello, thanks for setting up the Chess Club. I've been a member for a
                  few weeks and I'm already having lots of fun and improving my game.
                </p>
              </div>
            </div>
          </div>

          {/* Kimberly Smith */}

          <div onClick={() => toggleNotification(4)} className={isNew(4) == true ? "message-container message-container-new" : "message-container"}>
            <img className="person-icon" src="/images/avatar-kimberly-smith.webp" alt="user icon"/>
            <div className="ml-4 w-full">
              <a>
                <span className="person-name">Kimberly Smith</span>
                <span className="ml-2 message-describe">commented on your picture</span>
                <span className={isNew(4) == true ? "new-message-dot" : ""}/>
              </a>
              <div className="">
                <p className="message-duration">1 week ago</p>
              </div>
            </div>
            <img className="h-12 w-12 m-auto" src="/images/image-chess.webp" alt="chess game"/>
          </div>

          {/* Nathan Peterson */}

          <div onClick={() => toggleNotification(5)} className={isNew(5) == true ? "message-container message-container-new" : "message-container"}>
            <img className="person-icon" src="/images/avatar-nathan-peterson.webp" alt="user icon"/>
            <div className="ml-4 w-full">
              <a>
                <span className="person-name">Nathan Peterson</span>
                <span className="ml-2 mr-1 message-describe">reacted to your recent post</span>
                <span className="person-group-name">5 end-game strategies to increase your win rate</span>
                <span className={isNew(5) == true ? "new-message-dot" : ""}/>
              </a>
              <div className="">
                <p className="message-duration">2 week ago</p>
              </div>
            </div>
          </div>

          {/* Anna Kim */}

          <div onClick={() => toggleNotification(6)} className={isNew(6) == true ? "message-container message-container-new" : "message-container"}>
            <img className="person-icon" src="/images/avatar-anna-kim.webp" alt="user icon"/>
            <div className="ml-4 w-full">
              <a>
                <span className="person-name">Anna Kim</span>
                <span className="ml-2 mr-1 message-describe">left the group</span>
                <span className="person-group-name">Chess Club</span>
                <span className={isNew(6) == true ? "new-message-dot" : ""}/>
              </a>
              <div className="">
                <p className="message-duration">2 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}