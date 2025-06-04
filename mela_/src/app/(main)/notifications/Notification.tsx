//Bismillahirahmanirahim 
// Elhamdulillahirabbilalemin
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah


import UserAvatar from "@/components/UserAvatar";
import { NotificationData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { NotificationType } from "@prisma/client";
import { Heart, MessageCircle, User2 } from "lucide-react";
import Link from "next/link";

interface NotificationProps {
  notification: NotificationData;
}

export default function Notification({ notification }: NotificationProps) {
  const notificationtypeMap: Record<
    NotificationType,
    { message: string; icon: JSX.Element; href: string }
  > = {
  
    COMMENT: {
      message: `${notification.issuer.displayName} ji te re şîrove kir`,
      icon: <MessageCircle className="size-7 fill-primary text-primary" />,
      href: `/posts/${notification.recipientId}`,
    },
 
  };

  const { message, icon, href } = notificationtypeMap[notification.type];

  // post.content as an array (string[])
  return (
    <Link href={href} className="block">
      <article
        className={cn(
          "flex gap-3 rounded-2xl bg-card p-5 shadow-sm transition-colors hover:bg-card/70",
          !notification.read && "bg-primary/10",
        )}
      >
        <div className="my-1">{icon}</div>
        <div className="space-y-3">
          <UserAvatar avatarUrl={notification.issuer.avatarUrl} size={36} />
          <div>
            <span className="font-bold">{notification.issuer.displayName}</span>{" "}
            <span>{message}</span>
          </div>
          {notification.post && notification.post.content && Array.isArray(notification.post.content) && (
            <div className="line-clamp-3 whitespace-pre-line text-muted-foreground">
              {notification.post.content.map((line: string, idx: number) => (
                <span key={idx}>
                  {line}
                  {idx !== ((notification.post?.content?.length ?? 0) - 1) && <br />}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
