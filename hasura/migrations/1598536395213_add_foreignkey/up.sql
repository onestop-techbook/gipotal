
alter table "public"."circle_items"
           add constraint "circle_items_genre_id_fkey"
           foreign key ("genre_id")
           references "public"."genre"
           ("id") on update restrict on delete restrict;

alter table "public"."circle_links"
           add constraint "circle_links_circle_id_fkey"
           foreign key ("circle_id")
           references "public"."circles"
           ("id") on update restrict on delete restrict;

alter table "public"."tagging"
           add constraint "tagging_tag_id_fkey"
           foreign key ("tag_id")
           references "public"."tag"
           ("id") on update restrict on delete restrict;

alter table "public"."tagging"
           add constraint "tagging_item_id_fkey"
           foreign key ("item_id")
           references "public"."circle_items"
           ("id") on update restrict on delete restrict;

alter table "public"."circle_links"
           add constraint "circle_links_circle_id_fkey"
           foreign key ("circle_id")
           references "public"."circles"
           ("id") on update restrict on delete restrict;

alter table "public"."tagging"
           add constraint "tagging_tag_id_fkey"
           foreign key ("tag_id")
           references "public"."tag"
           ("id") on update restrict on delete restrict;

alter table "public"."tagging"
           add constraint "tagging_item_id_fkey"
           foreign key ("item_id")
           references "public"."circle_items"
           ("id") on update restrict on delete restrict;

alter table "public"."circle_links"
           add constraint "circle_links_circle_id_fkey"
           foreign key ("circle_id")
           references "public"."circles"
           ("id") on update restrict on delete restrict;

alter table "public"."tagging"
           add constraint "tagging_tag_id_fkey"
           foreign key ("tag_id")
           references "public"."tag"
           ("id") on update restrict on delete restrict;

alter table "public"."tagging"
           add constraint "tagging_item_id_fkey"
           foreign key ("item_id")
           references "public"."circle_items"
           ("id") on update restrict on delete restrict;

alter table "public"."circle_links"
           add constraint "circle_links_circle_id_fkey"
           foreign key ("circle_id")
           references "public"."circles"
           ("id") on update restrict on delete restrict;

alter table "public"."tagging"
           add constraint "tagging_tag_id_fkey"
           foreign key ("tag_id")
           references "public"."tag"
           ("id") on update restrict on delete restrict;

alter table "public"."tagging"
           add constraint "tagging_item_id_fkey"
           foreign key ("item_id")
           references "public"."circle_items"
           ("id") on update restrict on delete restrict;
