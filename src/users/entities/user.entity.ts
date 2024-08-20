import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Subscription } from "src/subscriptions/entities/subscription.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ nullable: true })
    firstName: string | null;

    @Column({ nullable: true })
    lastName: string  | null;
    
    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ unique: true })
    email: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ManyToOne(() => Subscription, subscription => subscription.users)
    subscription: Subscription;
}